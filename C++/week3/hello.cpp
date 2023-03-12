#include<iostream>
using namespace std;

void hello(string s)
{
    cout<<"Hello "<<s;
}
int main()
{
    string s;
    cout<<"Enter your name : ";
    cin>>s;
    hello(s);
    return 0;
}