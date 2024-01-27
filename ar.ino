#define enA 6
#define enB 5
#define in1 7
#define in2 8
#define in3 9
#define in4 10
#define leftSensor 12
#define rightSensor 11

void setup()
{
  pinMode(enA, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  pinMode(enB, OUTPUT);
  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);
  analogWrite(enA, 200); // Set default motor speed to 200
  analogWrite(enB, 200); // Set default motor speed to 200
}

void loop()
{
  // if both in white
  if ((digitalRead(leftSensor) == 0) && (digitalRead(rightSensor) == 0))
  {
    callGoForword();
  }

  // if right in black
  else if ((digitalRead(leftSensor) == 1) && (digitalRead(rightSensor) == 0))
  {
    callGoRight();
  }
  // if Left in Black
  else if ((digitalRead(leftSensor) == 0) && (digitalRead(rightSensor) == 1))
  {
    callGoLeft();
  }
  // if both in black
  else
  {
    callStop();
  }
}

void callGoForword()
{
  digitalWrite(in1, LOW);  // Left Motor backword Pin
  digitalWrite(in2, HIGH); // Left Motor forword Pin
  digitalWrite(in3, HIGH); // Right Motor forword Pin
  digitalWrite(in4, LOW);  // Right Motor backword Pin
}
void callGoRight()
{
  digitalWrite(in1, LOW);  // Left Motor backword Pin
  digitalWrite(in2, HIGH); // Left Motor forword Pin
  digitalWrite(in3, LOW);  // Right Motor forword Pin
  digitalWrite(in4, HIGH); // Right Motor backword Pin
}
void callGoLeft()
{
  digitalWrite(in1, HIGH); // Left Motor backword Pin
  digitalWrite(in2, LOW);  // Left Motor forword Pin
  digitalWrite(in3, HIGH); // Right Motor forword Pin
  digitalWrite(in4, LOW);  // Right Motor backword Pin
}
void callStop()
{
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in3, LOW);
}
