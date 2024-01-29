#include<stdio.h>

int main()
{

    // convert inch to cm
    /* int input;

     // cal means calculation
     float cal;

     printf("Enter an integer number in inch: ");
     scanf("%d", &input);

     cal = input * 2.54;

     // expected output is = 8 inch to cm is = 20.32 cm
     printf("\n %d into to cm is = %.2f cm",input, cal);
     */


    // divide 2 numbers and get reminder in output

    /* int number, secondNumber;
    float calculation;

    printf("Enter number 1: ");
    scanf("%d", &number);

    printf("Enter number 2 : ");
    scanf("%d", &secondNumber);

    calculation = number%secondNumber;
    printf("Ans is %.2f", calculation);
    */

    // divide 2 numbers with decimal output

    /* int number, secondNumber;
    float calculation;

    printf("Enter number 1: ");
    scanf("%d", &number);

    printf("Enter number 2 : ");
    scanf("%d", &secondNumber);

    // for get decimal output we must need to divide 2 different types of numbers.
    // by using (float) we convert integer type variable to float
    calculation = (float)number/secondNumber;

    printf("Ans is %.2f", calculation);
    */


    // advance start ====
    // array
    /*
        int i,n, student[5];

        for(i =0; i<5; i++)
        {
            n=i+1;
            printf("Enter student %d: ",n);
            scanf("%d", &student[i]);

            // show output
            printf("Student %d Number is %d \n",n,student[i]);
        }

    */

    // boolean- True or False

    // loop
    // 3 types of loop- for loop, while loop, do while loop
    /*
        int n,i,input;
        printf("Enter number: ");
        scanf("%d", &input);

        // for loop

        for(n=1; n<=input; n+=1)
        {
          printf("%d I love you \n",n);
        }

        // while loop

        n=1;
        while(n<=input)
        {
            n++;
            i = n-1;
            printf("%d I love you \n",i);

        }

        */

    return 0;
}




