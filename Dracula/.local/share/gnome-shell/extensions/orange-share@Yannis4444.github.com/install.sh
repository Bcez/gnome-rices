echo "Orange Share Installation"
echo "--------------------------------------------------------------------------------"
echo "Hosting the python part of the application on the Gnome Extension page was not"
echo "allowed which is why pip is used for installation and updating."
echo "--------------------------------------------------------------------------------"
echo "Do you really want to install Orange Share?"
echo "This will run 'python3 -m pip install --upgrade orangeshare'"
echo "You can find out more about it here: https://github.com/Yannis4444/Orange-Share"
echo "[Y/n]"

read -r a

a=${a,,}

if [ $a == "n" ] || [ $a == "no" ] || [ $a == "0" ]; then
  echo "Bye!"
else
  if python3 -m pip install --upgrade orangeshare; then
    echo "--------------------------------------------------------------------------------"
    echo "Successfully installed Orange Share"
  else
    echo "--------------------------------------------------------------------------------"
    echo "An error occurred while installing Orange Share"
  fi

  echo "Press ENTER to exit"
  read -r x
fi
