from django.urls import path
from .views import RegisterView, CustomAuthToken, GameList, SubmitGameSession, UserStats

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('games/', GameList.as_view(), name='game-list'),
    path('submit-score/', SubmitGameSession.as_view(), name='submit-score'),
    path('stats/', UserStats.as_view(), name='user-stats'),
]
