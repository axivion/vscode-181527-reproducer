# run integration tests

```
pnpm install && pnpm compile && pnpm build && pnpm test:integration
```

# error

```
> vscodeplugin@7.6.9999 compile /home/boschar/Repos/vscode-181527-reproducer
> tsc --build


> vscodeplugin@7.6.9999 build /home/boschar/Repos/vscode-181527-reproducer
> node bundle.js dev


> vscodeplugin@7.6.9999 test:integration /home/boschar/Repos/vscode-181527-reproducer
> node out/integrationTest/runIntegrationTests.js

Downloading VS Code 1.78.0 from https://update.code.visualstudio.com/1.78.0/linux-x64/stable
Downloading VS Code [=============================-] 100%Downloaded VS Code 1.78.0 into /home/boschar/Repos/vscode-181527-reproducer/.vscode-test/vscode-linux-x64-1.78.0
Downloading VS Code [==============================] 100%[0505/092148.048650:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/fd12e243-aa13-47ef-819b-7d301cdef885.lock: File exists (17)
[0505/092148.048772:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/3a965713-ce55-46f8-8b1c-ab823ed5f730.lock: File exists (17)
[0505/092148.048780:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/7c2ed403-abd9-462b-b40a-e60497aa0e77.lock: File exists (17)
[0505/092148.048787:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/267ea018-b574-4dc6-9e6c-6fbc95e7eae5.lock: File exists (17)
[0505/092148.048794:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/4a1a2630-16ee-4e8a-9dea-c78dedd96c55.lock: File exists (17)
[0505/092148.048800:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/76caaf99-fa27-4384-a60c-707b23d6832e.lock: File exists (17)
[0505/092148.048806:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/ed9cb6e5-0e48-4622-a80e-44e3b03761b7.lock: File exists (17)
[0505/092148.048813:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/c7f11ebd-c874-46e1-b5c1-e504bc95d88d.lock: File exists (17)
[0505/092148.048821:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/b61dd137-0e13-4819-8f2a-4a0939fd9eae.lock: File exists (17)
[0505/092148.048827:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/ad787a82-9f53-4582-b99a-0d882a0a7c16.lock: File exists (17)
[0505/092148.048834:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/5cd98eca-597e-49ba-8727-682a5a5e6efd.lock: File exists (17)
[0505/092148.048840:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/2d349342-59dd-4ff6-a5a6-662e11eb7f5a.lock: File exists (17)
[0505/092148.048846:ERROR:file_io_posix.cc(152)] open /tmp/vscodeplugin-it/.test_stable/Crashpad/pending/9bb0bc38-cdb9-4985-97ac-56a6f8129167.lock: File exists (17)
[main 2023-05-05T07:21:48.363Z] update#ctor - updates are disabled by the environment
Via 'product.json#extensionEnabledApiProposals' extension 'ms-vscode.vscode-selfhost-test-provider' wants API proposal 'testContinuousRun' but that proposal DOES NOT EXIST. Likely, the proposal has been finalized (check 'vscode.d.ts') or was abandoned.
Started initializing default profile extensions in extensions installation folder. file:///home/boschar/Repos/vscode-181527-reproducer/.vscode-test/extensions
Completed initializing default profile extensions in extensions installation folder. file:///home/boschar/Repos/vscode-181527-reproducer/.vscode-test/extensions
Loading development extension at /home/boschar/Repos/vscode-181527-reproducer
Starting Axivion plugin v7.6.9999.0 ...
[0505/092151.122542:ERROR:directory_reader_posix.cc(42)] opendir /tmp/vscodeplugin-it/.test_stable/Crashpad/attachments/77644cb4-06fc-4251-9bdd-b22a7663ebfb: No such file or directory (2)
[main 2023-05-05T07:21:51.227Z] Extension host with pid 2059848 exited with code: 133, signal: unknown.
[main 2023-05-05T07:21:51.228Z] [UtilityProcess id: 1, type: extensionHost, pid: 2059848]: crashed with code 133 and reason 'crashed'
Exit code:   133
Failed

```
