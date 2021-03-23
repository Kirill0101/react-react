from rest_framework import serializers
from newexp.models import Account, UploadFileForm, Table, FinalTab



class AccountSerializer(serializers.ModelSerializer):

    class Meta():
        model = Account
        fields = ('email','name','is_teacher', 'password', 'email', 'is_active', 'username')



class TableSerializer(serializers.ModelSerializer):



    class Meta():
        model = Table
        fields = '__all__'


class FileSerializer(serializers.ModelSerializer):

    class Meta():
        model = UploadFileForm
        fields = '__all__'

class FinalSerializer(serializers.ModelSerializer):

    class Meta():
        model = FinalTab
        fields = '__all__'
