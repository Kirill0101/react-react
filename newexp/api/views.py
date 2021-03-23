

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication

from rest_framework.response import Response


from newexp.models import Table
from .serializers import TableSerializer


from newexp.models import FinalTab
from .serializers import FinalSerializer

from newexp.models import Account
from .serializers import AccountSerializer

from newexp.models import UploadFileForm
from .serializers import FileSerializer




class FinalTableListView(viewsets.ModelViewSet):


    queryset = FinalTab.objects.all()
    serializer_class = FinalSerializer



class TableListView(viewsets.ModelViewSet):


    queryset = Table.objects.all()
    serializer_class = TableSerializer




class FileListView(viewsets.ModelViewSet):


    queryset = UploadFileForm.objects.all()
    serializer_class = FileSerializer



class AccountListView(viewsets.ModelViewSet):

    queryset = Account.objects.all()
    serializer_class = AccountSerializer
