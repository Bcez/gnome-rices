# gpgconf
# Autogenerated from man page /usr/share/man/man1/gpgconf.1.gz
complete -c gpgconf -s o -d 'TQ   --output file Write output to file.   Default is to write to stdout'
complete -c gpgconf -s v -d 'TQ   --verbose Outputs additional information while running'
complete -c gpgconf -s q -d 'TQ   --quiet Try to be as quiet as possible'
complete -c gpgconf -l homedir -d 'Set the name of the home directory to dir'
complete -c gpgconf -l chuid -d 'Change the current user to uid which may either be a number or a name'
complete -c gpgconf -s n -d 'TQ   --dry-run Do not actually change anything'
complete -c gpgconf -s r -d 'TQ   --runtime Only used together with --change-options'
complete -c gpgconf -l list-components -d 'List all components.   This is the default command used if none is specified'
complete -c gpgconf -l check-programs -d 'List all available backend programs and test whether they are runnable'
complete -c gpgconf -l list-options -d 'List all options of the component component'
complete -c gpgconf -l change-options -d 'Change the options of the component component'
complete -c gpgconf -l check-options -d 'Check the options for the component component'
complete -c gpgconf -l apply-profile -d 'Apply the configuration settings listed in file to the configuration files'
complete -c gpgconf -l apply-defaults -d 'Update all configuration files with values taken from the global configuratio…'
complete -c gpgconf -l list-dirs -d 'Lists the directories used by gpgconf'
complete -c gpgconf -l list-config -d 'List the global configuration file in a colon separated format'
complete -c gpgconf -l check-config -d 'Run a syntax check on the global configuration file'
complete -c gpgconf -l query-swdb -d 'Returns the current version for package_name and if version_string is given a…'
complete -c gpgconf -l reload -d 'Reload all or the given component'
complete -c gpgconf -l launch -d 'If the component is not already running, start it'
complete -c gpgconf -l kill -d 'Kill the given component that runs as a daemon, including gpg-agent, dirmngr,…'
complete -c gpgconf -l create-socketdir -d 'Create a directory for sockets below /run/user or /var/run/user'
complete -c gpgconf -l remove-socketdir -d 'Remove a directory created with command --create-socketdir.  OPTIONS'
complete -c gpgconf -l output -d 'Write output to file.   Default is to write to stdout'
complete -c gpgconf -l verbose -d 'Outputs additional information while running'
complete -c gpgconf -l quiet -d 'Try to be as quiet as possible'
complete -c gpgconf -l dry-run -d 'Do not actually change anything'
complete -c gpgconf -l runtime -d 'Only used together with --change-options'
complete -c gpgconf -l status-fd -d 'Write special status strings to the file descriptor n'

