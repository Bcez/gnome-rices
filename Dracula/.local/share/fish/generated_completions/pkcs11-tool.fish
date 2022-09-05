# pkcs11-tool
# Autogenerated from man page /usr/share/man/man1/pkcs11-tool.1.gz
complete -c pkcs11-tool -l attr-from -d 'Extract information from filename (DER-encoded certificate file) and create t…'
complete -c pkcs11-tool -l change-pin -s c -d 'Change the user PIN on the token'
complete -c pkcs11-tool -l unlock-pin -d 'Unlock User PIN (without --login unlock in logged in session; otherwise --log…'
complete -c pkcs11-tool -l hash -s h -d 'Hash some data'
complete -c pkcs11-tool -l hash-algorithm -d 'Specify hash algorithm used with RSA-PKCS-PSS signature or RSA-OAEP decryption'
complete -c pkcs11-tool -l id -s d -d 'Specify the id of the object to operate on'
complete -c pkcs11-tool -l init-pin -d 'Initializes the user PIN'
complete -c pkcs11-tool -l init-token -d 'Initialize a token: set the token label as well as a Security Officer PIN (th…'
complete -c pkcs11-tool -l input-file -s i -d 'Specify the path to a file for input'
complete -c pkcs11-tool -l keypairgen -s k -d 'Generate a new key pair (public and private pair. )'
complete -c pkcs11-tool -l keygen -d 'Generate a new key'
complete -c pkcs11-tool -l key-type -d 'Specify the type and length (bytes if symmetric) of the key to create, for ex…'
complete -c pkcs11-tool -l usage-sign -d 'Specify \\*(Aqsign\\*(Aq key usage flag (sets SIGN in privkey, sets VERIFY in p…'
complete -c pkcs11-tool -l usage-decrypt -d 'Specify \\*(Aqdecrypt\\*(Aq key usage flag (RSA only, set DECRYPT privkey, ENCR…'
complete -c pkcs11-tool -l usage-derive -d 'Specify \\*(Aqderive\\*(Aq key usage flag (EC only)'
complete -c pkcs11-tool -l usage-wrap -d 'Specify \\*(Aqwrap\\*(Aq key usage flag'
complete -c pkcs11-tool -l label -s a -d 'Specify the name of the object to operate on (or the token label when --init-…'
complete -c pkcs11-tool -l list-mechanisms -s M -d 'Display a list of mechanisms supported by the token'
complete -c pkcs11-tool -l list-objects -s O -d 'Display a list of objects'
complete -c pkcs11-tool -l list-slots -s L -d 'Display a list of available slots on the token'
complete -c pkcs11-tool -l list-token-slots -s T -d 'List slots with tokens'
complete -c pkcs11-tool -l list-interfaces -d 'List interfaces of PKCS #11 3. 0 library'
complete -c pkcs11-tool -l login -s l -d 'Authenticate to the token before performing other operations'
complete -c pkcs11-tool -l login-type -d 'Specify login type (\\*(Aqso\\*(Aq, \\*(Aquser\\*(Aq, \\*(Aqcontext-specific\\*(Aq;…'
complete -c pkcs11-tool -l mechanism -s m -d 'Use the specified mechanism for token operations'
complete -c pkcs11-tool -l mgf -d 'Use the specified Message Generation Function (MGF) function for RSA-PKCS-PSS…'
complete -c pkcs11-tool -l module -d 'Specify a PKCS#11 module (or library) to load'
complete -c pkcs11-tool -l moz-cert -s z -d 'Test a Mozilla-like key pair generation and certificate request'
complete -c pkcs11-tool -l output-file -s o -d 'Specify the path to a file for output'
complete -c pkcs11-tool -l pin -s p -d 'Use the given pin for token operations'
complete -c pkcs11-tool -l puk -d 'Supply User PUK on the command line'
complete -c pkcs11-tool -l new-pin -d 'Supply new User PIN on the command line'
complete -c pkcs11-tool -l sensitive -d 'Set the CKA_SENSITIVE attribute (object cannot be revealed in plaintext)'
complete -c pkcs11-tool -l extractable -d 'Set the CKA_EXTRACTABLE attribute (object can be extracted)'
complete -c pkcs11-tool -l set-id -s e -d 'Set the CKA_ID of the object'
complete -c pkcs11-tool -l show-info -s I -d 'Display general token information'
complete -c pkcs11-tool -l sign -s s -d 'Sign some data'
complete -c pkcs11-tool -l decrypt -d 'Decrypt some data'
complete -c pkcs11-tool -l derive -d 'Derive a secret key using another key and some data'
complete -c pkcs11-tool -l derive-pass-der -d 'Derive ECDHpass DER encoded pubkey for compatibility with some PKCS#11 implem…'
complete -c pkcs11-tool -l salt-len -d 'Specify how many bytes of salt should be used in RSA-PSS signatures'
complete -c pkcs11-tool -l slot -d 'Specify the id of the slot to use'
complete -c pkcs11-tool -l slot-description -d 'Specify the description of the slot to use'
complete -c pkcs11-tool -l slot-index -d 'Specify the index of the slot to use'
complete -c pkcs11-tool -l object-index -d 'Specify the index of the object to use'
complete -c pkcs11-tool -l use-locking -d 'Tell pkcs11 module it should use OS thread locking'
complete -c pkcs11-tool -l test-threads -d 'Test a pkcs11 module\\*(Aqs thread implication.  (See source code)'
complete -c pkcs11-tool -l token-label -d 'Specify the label of token'
complete -c pkcs11-tool -l so-pin -d 'Use the given pin as the Security Officer PIN for some token operations (toke…'
complete -c pkcs11-tool -l test -s t -d 'Perform some tests on the token'
complete -c pkcs11-tool -l test-hotplug -d 'Test hotplug capabilities (C_GetSlotList + C_WaitForSlotEvent)'
complete -c pkcs11-tool -l private -d 'Set the CKA_PRIVATE attribute (object is only viewable after a login)'
complete -c pkcs11-tool -l always-auth -d 'Set the CKA_ALWAYS_AUTHENTICATE attribute to a private key object'
complete -c pkcs11-tool -l allowed-mechanisms -d 'Sets the CKA_ALLOWED_MECHANISMS attribute to a key objects when importing an …'
complete -c pkcs11-tool -l test-ec -d 'Test EC (best used with the --login or --pin option)'
complete -c pkcs11-tool -l test-fork -d 'Test forking and calling C_Initialize() in the child'
complete -c pkcs11-tool -l type -s y -d 'Specify the type of object to operate on'
complete -c pkcs11-tool -l verbose -s v -d 'Cause pkcs11-tool to be more verbose'
complete -c pkcs11-tool -l verify -d 'Verify signature of some data'
complete -c pkcs11-tool -l read-object -s r -d 'Get object\\*(Aqs CKA_VALUE attribute (use with --type)'
complete -c pkcs11-tool -l delete-object -s b -d 'Delete an object'
complete -c pkcs11-tool -l application-label -d 'Specify the application label of the data object (use with --type data)'
complete -c pkcs11-tool -l application-id -d 'Specify the application ID of the data object (use with --type data)'
complete -c pkcs11-tool -l issuer -d 'Specify the issuer in hexadecimal format (use with --type cert)'
complete -c pkcs11-tool -l subject -d 'Specify the subject in hexadecimal format (use with --type cert/privkey/pubke…'
complete -c pkcs11-tool -l signature-file -d 'The path to the signature file for signature verification'
complete -c pkcs11-tool -l signature-format -d 'Format for ECDSA signature: \\*(Aqrs\\*(Aq (default), \\*(Aqsequence\\*(Aq, \\*(Aq…'
complete -c pkcs11-tool -l write-object -s w -d 'Write a key or certificate object to the token'
complete -c pkcs11-tool -l generate-random -d 'Get num bytes of random data'
complete -c pkcs11-tool -l allow-sw -d 'Allow using software mechanisms that do not have the CKF_HW flag set'

