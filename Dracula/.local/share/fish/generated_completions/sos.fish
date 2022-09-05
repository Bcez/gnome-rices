# sos
# Autogenerated from man page /usr/share/man/man1/sos.1.gz
complete -c sos -l help
complete -c sos -l batch -d 'Do not prompt interactively, user will not be prompted for any data'
complete -c sos -l encrypt-key -d 'Encrypts the resulting archive that sosreport produces using GPG'
complete -c sos -l encrypt-pass -d 'The same as --encrypt-key, but use the provided PASS for symmetric encryption…'
complete -c sos -l config-file -d 'Specify alternate configuration file'
complete -c sos -s s -l sysroot -d 'Specify an alternate root file system path'
complete -c sos -l tmp-dir -d 'Specify alternate temporary directory to copy data during execution'
complete -c sos -l threads -d 'Specify the number of threads sosreport will use for concurrency'
complete -c sos -s v -l verbose -d 'Increase logging verbosity'
complete -c sos -s q -l quiet -d 'Only log fatal errors to stderr'
complete -c sos -s z -l compression-type -d 'Compression type to use when compression the final archive output'

