#include<iostream>
using namespace std;

int max_two(int a, int b)
{
    return (a>b)?a:b;
}
int main()
{
    int a,b;
    cout<<"Enter two numbers : "<<endl;
    cin>>a>>b;
    int max = max_two(a,b);
    cout<<"The maximum of the two numbers is : "<<max;
    return 0;
}
