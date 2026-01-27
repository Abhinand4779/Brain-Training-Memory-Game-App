from django.db import models
from django.contrib.auth.models import User

class Game(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class GameSession(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='game_sessions')
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='sessions')
    score = models.IntegerField(default=0)
    time_taken = models.IntegerField(help_text="Time taken in seconds") 
    moves = models.IntegerField(default=0, help_text="Number of moves made (if applicable)")
    played_at = models.DateTimeField(auto_now_add=True)
    difficulty = models.CharField(max_length=20, default='normal')

    def __str__(self):
        return f"{self.user.username} - {self.game.name} - {self.score}"
