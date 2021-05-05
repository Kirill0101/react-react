from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import  AccountListView, FileListView,TableListView, FinalTableListView, TableListView2, FinalTableListView2,UserQListView, OrdenListView


router = DefaultRouter()
router.register(r'accounts', AccountListView, basename='name1')
router.register(r'files', FileListView, basename='name2')
router.register(r'tables', TableListView, basename='name3')
router.register(r'finals', FinalTableListView, basename='name4')
router.register(r'finals2', FinalTableListView2, basename='name5')
router.register(r'tables2', TableListView2, basename='name6')
router.register(r'userq', UserQListView, basename='name7')
router.register(r'orden', OrdenListView, basename='name8')



urlpatterns =  router.urls

# urlpatterns = router.urls
