from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

class TodoListCreateView(generics.ListCreateAPIView):
    queryset = Todo.objects.all().order_by('-created_at')
    serializer_class = TodoSerializer

class TodoDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

