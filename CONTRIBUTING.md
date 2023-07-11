## Getting Started
There are some steps that you need to follow before making any contribution in this project, the following steps are important to get start.


### Step 1. Fork the Repository
 [Fork](https://github.com/shivam-sharma7/Expense-Tracker/fork) the repo first
 
### Step 2. Clone the forked Repository 
    ```
    git clone https://github.com/<your_github_username>/Expense-Tracker.git
    ```
### Step 3. Set Up Remotes 
- Add a reference (remote) to the original repository:
    ```
    git remote add upstream  https://github.com/shivam-sharma7/Expense-Tracker/.git
    ``` 
    - Add a reference (remote) to your forked repository:
```
git remote add origin https://github.com/<your_user_name>/Expense-Tracker.git
```

### Step 4. Check Remotes
```
git remote -v
```

### Step 5. Keep Your Local Copy Updated
```
git pull upstream main
``` 
### Step 6. Create a New Branch
```
git checkout -b <your_branch_name>
```

## Making Changes
Perform your desired changes to the code base.
### Step 7. Track Changes
    ```
     # Track the changes
     git status

     # Add changes to Index
     git add . or git add <file_name>
     ```
### Step 8. Commit Changes
    ```
    git commit -m "Write a meaningful but small commit message" 
    ```
  ### Step 9. Push Changes
```
git push -u origin <your_branch_name>
```

We appreciate your understanding and cooperation in following our guidelines. Thank you for your contribution! 🙌
Congratulations! You've made your PR with the desired changes. Once the PR is reviewed, it will be merged into the original codebase for everyone to see and use. 

## Thank You!
Thank you so much for contributing. We appreciate your valuable input, and we hope to see you again soon. 😊
