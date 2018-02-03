All components here must recieve props in order to be used.

Shared Components should not use styled-components due to possible code-splitting issues. To style, please build an encapsulated style sheet and leave the sheet within the component directory.

If you want to use styled-components, build the component within the directory and make sure it is fully exclusive/encapsuled to the component that you're building it for