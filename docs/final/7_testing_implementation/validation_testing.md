# Validation Testing

| Test Cases    | Test Data                          | Expected Result                 | Actual Result                                 | Comment          |
| ------------- | ---------------------------------- | ------------------------------- | --------------------------------------------- | ---------------- |
| XSS Injection | `<script>alert("hello");</script>` | Will not prompt hello msgbox    | Code didn't executed                          | Working properly |
| SQL Injection | `"'`                               | Doesn't show undefined behavior | Code didn't executed (No Undefined behaviour) | Working properly |
|               |                                    |                                 |                                               |                  |

