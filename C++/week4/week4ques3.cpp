#include<iostream>
using namespace std;
int funcnostatic(int)
{
    int sum = 0;
    sum = sum + 10;
    return sum;
}
int funcstatic(int)
{
    static int sum = 0;
    sum = sum + 10;
    return sum;
}
int main(void)
{
    int r = 5, s;
    cout<<"Without static keyword\n";
    s = funcnostatic(r);
    cout<<"1st time function call, s = "<<s<<endl;
    s = funcnostatic(r);
    cout<<"2nd time function call, s = "<<s<<endl;
    s = funcnostatic(r);
    cout<<"3rd time function call, s = "<<s<<endl;
    cout<<"With static keyword\n";
    s = funcstatic(r);
    cout<<"1st time function call, s = "<<s<<endl;
    s = funcstatic(r);
    cout<<"2nd time function call, s = "<<s<<endl;
    s = funcstatic(r);
    cout<<"3rd time function call, s = "<<s<<endl;
    return 0;
}