#include<iostream>
using namespace std;

int main()
{
    int a[10];
    cout<<"Enter the values of the data set : "<<endl;
    for(int i=0;i<10;i++)
        cin>>a[i];
    int *ptr,max;
    ptr = &a[0];
    max = a[0];
    for(int i=1;i<10;i++)
    {
        if(a[i]>max)
        {
            max = a[i];
            ptr = &a[i];
        }
    }
    cout<<"The max value in the data set is : "<<*ptr;
    return 0;
}