from rest_framework import generics, permissions, status, views
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth.models import User
from django.db.models import Sum, Avg, Count
from .models import Game, GameSession
from .serializers import UserSerializer, GameSerializer, GameSessionSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'username': user.username
        })

class GameList(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    permission_classes = [permissions.AllowAny] 

class SubmitGameSession(generics.CreateAPIView):
    queryset = GameSession.objects.all()
    serializer_class = GameSessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserStats(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        sessions = GameSession.objects.filter(user=user)
        
       
        total_games_played = sessions.count()
        total_score_all_time = sessions.aggregate(Sum('score'))['score__sum'] or 0
        total_time_played_seconds = sessions.aggregate(Sum('time_taken'))['time_taken__sum'] or 0
        
       
        game_stats = []
        games = Game.objects.all()
        for game in games:
            game_sessions = sessions.filter(game=game)
            if game_sessions.exists():
                high_score = game_sessions.order_by('-score').first().score
                avg_score = game_sessions.aggregate(Avg('score'))['score__avg']
                game_stats.append({
                    'game': game.name,
                    'played': game_sessions.count(),
                    'high_score': high_score,
                    'average_score': round(avg_score, 2)
                })
        
        return Response({
            'username': user.username,
            'total_games_played': total_games_played,
            'total_score': total_score_all_time,
            'total_time_played_seconds': total_time_played_seconds,
            'game_performance': game_stats
        })
