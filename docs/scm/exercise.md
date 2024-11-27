---
sidebar_position: 2
---

# Exercise

To set your global username/email configuration:
Open the command line.

Set your username:
`git config --global user.name "FIRST_NAME LAST_NAME"`

Set your email address:
`git config --global user.email "MY_NAME@example.com"`

#### TODO - Add command for init script that initialises hooks and lays out folder structure

- Create a new repository called **`pre-kdu-training`** from the command line
- Create a file called `startup.sh` and paste the below contents in it.

```bash
#!/bin/bash
set -e
MAIN_SCRIPT_URL="https://pre-kdu.s3.us-east-1.amazonaws.com/pre-kdu.sh"
MAIN_SCRIPT_NAME="pre-kdu.sh"
echo "Downloading $MAIN_SCRIPT_NAME..."
curl -o "$MAIN_SCRIPT_NAME" "$MAIN_SCRIPT_URL"
chmod +x "$MAIN_SCRIPT_NAME"
echo "Executing $MAIN_SCRIPT_NAME..."
./"$MAIN_SCRIPT_NAME"
echo "Deleting $MAIN_SCRIPT_NAME..."
rm "$MAIN_SCRIPT_NAME"
echo "All tasks completed successfully!"
```

- Run `chmod +x startup.sh` and then execute the file `./startup.sh`.
- After successful run of this script go ahead and delete it `rm startup.sh`. Continue with the next steps.
- Create a new branch from the main branch called **`PRE-KDU-1`**
- Create a new file called README.md in the above repository in the PRE-KDU-1 branch.

```md title="README.md"
Feel Free to add a cool intro about yourself in the README
```

- Commit the above-created file with the message "PRE-KDU-1: Added README.md file"
- Push the changes to the repository
- Create a Pull Request from the PRE-KDU-1 branch against the main branch
- Share your GitHub username with us
- Provide access to the user: **`gowreswaran`** for the above-created repository
