#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int length;

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    // Remove the newline character from the string
    if (str[strlen(str) - 1] == '\n') {
        str[strlen(str) - 1] = '\0';
    }

    length = strlen(str);
    printf("Length of the string: %d\n", length);

    return 0;
}
