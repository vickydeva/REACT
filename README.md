# React class codes.

# parcel

--- refer the parcel documentation.

- local server
- HMR Hot Module Replacement
- DEV build
- parcel uses File Watching Algorithm --> written in C++.
- Uses caching -- fast build
- Image optimization
- In production build -- minify the all the files by bundle
- compress the files as well.
- consistent hashing
- code splitting.

# File structure.

    - src folder for root file.
    - components folder for all the components.
    - never keep any hardcoded code in the component files, move it to util files.

    # import/export - two types.
        - Before import the files into the root folder, export the file.
            1. default export --> export default filename --> import filename from "path".
            2. named export --> export word before the var_name --> import {filename/var_name} from "path".
