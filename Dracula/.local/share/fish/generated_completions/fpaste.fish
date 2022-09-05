# fpaste
# Autogenerated from man page /usr/share/man/man1/fpaste.1.gz
complete -c fpaste -l version -d 'show program\'s version number and exit'
complete -c fpaste -s h -l help -d 'show help message and exit'
complete -c fpaste -s t -l title -d 'title for paste; default is UNTITLED'
complete -c fpaste -s l -d 'language of content for syntax highlighting; default is "text"; use "list" to…'
complete -c fpaste -s x -d 'life of paste in minutes; default is 1 day (maximum)'
complete -c fpaste -s r -l private -d 'make paste private; default is yes; valid options: 1 (yes), 0 (no)'
complete -c fpaste -s i -l clipin -d 'read paste text from current X clipboard selection [requires xsel]'
complete -c fpaste -s o -l clipout -d 'save returned paste URL to all the clipboards i'
complete -c fpaste -l input-selection -d 'specify which X clipboard to use'
complete -c fpaste -s w -l wayland-clipin -d 'read paste text from Wayland selection [requires: wl-clip]'
complete -c fpaste -l fullpath -d 'use pathname VS basename for file description(s)'
complete -c fpaste -l pasteself -d 'paste this script itself'
complete -c fpaste -l sysinfo -d 'paste general system information'
complete -c fpaste -l btrfsinfo -d 'paste btrfs related system information'
complete -c fpaste -l printonly -d 'print paste, but do not send'

