from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import  AccountListView, FileListView,TableListView, FinalTableListView


router = DefaultRouter()
router.register(r'accounts', AccountListView, basename='name1')
router.register(r'files', FileListView, basename='name2')
router.register(r'tables', TableListView, basename='name3')
router.register(r'finals', FinalTableListView, basename='name4')

urlpatterns =  router.urls

# urlpatterns = router.urls
