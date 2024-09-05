from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, ApplicationViewSet, NotificationViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'applications', ApplicationViewSet)
router.register(r'employers/(?P<employer_id>[^/.]+)/notifications', NotificationViewSet, basename='notifications')

urlpatterns = [
    path('api/', include(router.urls)),
]