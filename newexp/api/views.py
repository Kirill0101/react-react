

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication

from rest_framework.response import Response


from newexp.models import Table
from .serializers import TableSerializer



from newexp.models import Orden
from .serializers import OrdenSerializer


from newexp.models import UserQ
from .serializers import UserQSerializer


from newexp.models import FinalTab
from .serializers import FinalSerializer

from newexp.models import Account
from .serializers import AccountSerializer

from newexp.models import UploadFileForm
from .serializers import FileSerializer

from newexp.models import FinalTab2
from .serializers import FinalSerializer2


from newexp.models import Table2
from .serializers import TableSerializer2


class UserQListView(viewsets.ModelViewSet):

    queryset = UserQ.objects.all()
    serializer_class = UserQSerializer


class OrdenListView(viewsets.ModelViewSet):

    queryset = Orden.objects.all()
    serializer_class = OrdenSerializer



class FinalTableListView(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, )
    queryset = FinalTab.objects.all()
    serializer_class = FinalSerializer


class FinalTableListView2(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, )
    queryset = FinalTab2.objects.all()
    serializer_class = FinalSerializer2



class TableListView(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, )
    queryset = Table.objects.all()
    serializer_class = TableSerializer


class TableListView2(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, )
    queryset = Table2.objects.all()
    serializer_class = TableSerializer2


class FileListView(viewsets.ModelViewSet):


    queryset = UploadFileForm.objects.all()
    serializer_class = FileSerializer



class AccountListView(viewsets.ModelViewSet):


    queryset = Account.objects.all()
    serializer_class = AccountSerializer
