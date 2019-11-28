
Feature: test based challenge equals
     Scenario Outline: User solves an unsolved test based challenge.
Given that user <user> is already logged on 
And the user wants to solve the test based challenge
And the user has already solve this challenge before with a score of 12 points
And the text of this challenge is
'''
	Public static boolean equals (int a, int b){
   		If (a != b) {
     			return true;
		}
		else{
    			return false;
		} 
	}
 '''

And the test of the challenge is 
''' 
	@Test
    		Public
			void testEquals(){
   	     		assertEquals(false,equals(2,2));
    			}
'''
  			And the proposed solution is
'''
	Public static boolean equals (int a, int b){
   
		If (a == b) {
     			return true;
		}
'''
ProgramRepairGolf-DOSE2019


 







Feature: Recover password
Scenario: A registered user wants to recover his password
Given that a user wants to recover his password
And the email selected is "pponzio@gmail.com"
And the email "pponzio@gmail.com" is registered with user "pponzio" When the user tries to recover his password
Then a new random password is set for user "pponzio"
And an email is sent to the user's email with the new user's password










Feature: Test challenge
Scenario: The administrator user wants to create a new challenge already complete based on tests

Given  the user “pponzio” is already logged on
		And the user is a creator user
And the challenge is:
'''
	Public static boolean equals(int a, int b){
   			If (a == b) {
			     return true;
			}
			else{
			    return false;
			} 
	}
'''

And the test is
'''
	
	@Test
    		Public
			void testEquals(){
   			assertEquals(true,equals(2,2));
 	 		}
'''
When the user submits the challenge
Then the system should save the challenge

