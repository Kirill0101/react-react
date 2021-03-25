from rest_framework import serializers
from newexp.models import Account, UploadFileForm, Table, FinalTab
from django.contrib.auth.hashers import make_password



class AccountSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(AccountSerializer, self).create(validated_data)

    class Meta():
        model = Account
        fields = ('email','name','is_teacher', 'password', 'email', 'is_active', 'username', 'experience')




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
