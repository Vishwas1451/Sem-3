#include<iostream>
using namespace std;
class Demo 
{
   int val;
   public:
   Demo(int x = 0) 
   {
      val = x;
   }
   int getValue() const {
      return val;
   }
};
int main() 
{
   const Demo d(28);
   Demo d1(8);
   cout << "The value using object 1 : " << d.getValue();
   cout << "\nThe value using object 2 : " << d1.getValue();
   return 0;
}