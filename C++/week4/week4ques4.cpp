#include<iostream>
using namespace std;
class baseclass
{
    private:
        int s;
    protected:
        int t;
    public:
        int u;
    baseclass()
    {
        s = 11;
        t = 12;
        u = 13;
    }
};
class deriveclass: private baseclass
{
    public:
        void show ()
        {
            cout << "s is not accessible";
            cout << "\nt is " << t;
            cout << "\nu is " << u;
        }
};
int main()
{
    deriveclass l;
    l.show();
    return 0;
}