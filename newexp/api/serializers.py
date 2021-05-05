from rest_framework import serializers
from newexp.models import Account, UploadFileForm, Table, FinalTab, Table2, FinalTab2, UserQ, Orden
from django.contrib.auth.hashers import make_password



class AccountSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(AccountSerializer, self).create(validated_data)

    class Meta():
        model = Account
        fields = ('email','name','is_teacher', 'password', 'email', 'is_active', 'username')



class OrdenSerializer(serializers.ModelSerializer):



    class Meta():
        model = Orden
        fields = '__all__'



class TableSerializer(serializers.ModelSerializer):



    class Meta():
        model = Table
        fields = '__all__'


class UserQSerializer(serializers.ModelSerializer):



    class Meta():
        model = UserQ
        fields = '__all__'


class TableSerializer2(serializers.ModelSerializer):



    class Meta():
        model = Table2
        fields = '__all__'


class FileSerializer(serializers.ModelSerializer):

    class Meta():
        model = UploadFileForm
        fields = '__all__'

class FinalSerializer(serializers.ModelSerializer):

    class Meta():
        model = FinalTab
        fields = '__all__'


class FinalSerializer2(serializers.ModelSerializer):

    class Meta():
        model = FinalTab2
        fields = '__all__'
