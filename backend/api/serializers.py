from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Game, GameSession

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

class GameSessionSerializer(serializers.ModelSerializer):
    game_slug = serializers.CharField(write_only=True)
    game_name = serializers.CharField(source='game.name', read_only=True)

    class Meta:
        model = GameSession
        fields = ['id', 'game_slug', 'game_name', 'score', 'time_taken', 'moves', 'played_at', 'difficulty']

    def create(self, validated_data):
        game_slug = validated_data.pop('game_slug')
        try:
            game = Game.objects.get(slug=game_slug)
        except Game.DoesNotExist:
            raise serializers.ValidationError({"game_slug": "Game with this slug does not exist."})
        
        session = GameSession.objects.create(game=game, **validated_data)
        return session
