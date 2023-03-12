#include<iostream>
using namespace std;

int main()
{	
   char str[] = "A string.";
   char *pc = str;

   cout<<"Letter at str[0]= "<<str[0]<<" the ptr position= "<<*pc<<" letter= "<<pc[3]<<endl;
   pc += 2;
   cout<<"Updated ptr by 2: ptr= "<<*pc<<" letter= "<<pc[2]<<" letter= "<<pc[5]<<endl;
	
	return 0;
}
