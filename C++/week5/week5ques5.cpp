#include <iostream>
using namespace std;

class  Wall {
  private:
    double length;
  public:
    Wall() {
      length = 5.5;
      cout << "Creating a wall." << endl;
      cout << "Length = " << length << endl;
    }
    Wall(double len) {
        length = len;
    }
    double calculateArea() {
      return length * length;
    }
    Wall(Wall &obj) {
      length = obj.length;
    }
    ~Wall(){
       cout<<"Destructor has been called."<<endl;
    }
};

int main() {
  Wall wall1;
  cout<<"Default constructor has been used to create the wall 1."<<endl;
  cout<<endl;
  Wall wall2(10.5);
  cout << "Area of Wall 2: " << wall2.calculateArea()<<endl;
  cout<<"Parameterised constructor has been used to find the area of the wall 2."<<endl;
  cout<<endl;
  Wall wall3 = wall2;
  cout << "Area of Wall 3: " << wall3.calculateArea()<<endl;
  cout<<"Copy constructor has been used to find the area of the wall 3."<<endl;
  cout<<endl;
  return 0;
}