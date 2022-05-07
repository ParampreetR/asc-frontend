#!/usr/bin/env python3

import os


def process_file(content, f_name: str):
    if f_name.endswith(".js"):
        output = "# " + f_name.replace(".js", "")
        with open("../docs/script_outputs/pages/" + f_name.replace(".js", "") + ".md", "w") as f:
            output += "\n\n```jsx\n" + "".join(content) + "\n```"
            f.write(output)


if __name__ == "__main__":
    target_path = "../src/pages/"
    file_list = os.listdir(target_path)

    for file in file_list:
        with open(target_path + file) as f:
            process_file(f.readlines(), file)
