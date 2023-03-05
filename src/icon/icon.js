const infoIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3NzM1Nzk5OTQxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1MTciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDg1LjMzMzMzM0MyNzYuNDggODUuMzMzMzMzIDg1LjMzMzMzMyAyNzYuNDggODUuMzMzMzMzIDUxMlMyNzYuNDggOTM4LjY2NjY2NyA1MTIgOTM4LjY2NjY2NyA5MzguNjY2NjY3IDc0Ny41MiA5MzguNjY2NjY3IDUxMiA3NDcuNTIgODUuMzMzMzMzIDUxMiA4NS4zMzMzMzN6IG0wIDc5Ni40NDQ0NDVjLTIwMy42NjIyMjIgMC0zNjkuNzc3Nzc4LTE2Ni4xMTU1NTYtMzY5Ljc3Nzc3OC0zNjkuNzc3Nzc4UzMwOC4zMzc3NzggMTQyLjIyMjIyMiA1MTIgMTQyLjIyMjIyMiA4ODEuNzc3Nzc4IDMwOC4zMzc3NzggODgxLjc3Nzc3OCA1MTIgNzE1LjY2MjIyMiA4ODEuNzc3Nzc4IDUxMiA4ODEuNzc3Nzc4eiIgcC1pZD0iNDUxOCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01NDkuNTQ2NjY3IDY0MS43MDY2NjdsLTI5LjU4MjIyMyAxNS45Mjg4ODljMi4yNzU1NTYtMTIuNTE1NTU2IDE0Ljc5MTExMS02Mi41Nzc3NzggMzUuMjcxMTEyLTE1Mi40NjIyMjMgMi4yNzU1NTYtOS4xMDIyMjIgNC41NTExMTEtMzYuNDA4ODg5LTE1LjkyODg4OS00Ny43ODY2NjYtNi44MjY2NjctMy40MTMzMzMtMTQuNzkxMTExLTMuNDEzMzMzLTIyLjc1NTU1NiAwLTkuMTAyMjIyIDMuNDEzMzMzLTE3LjA2NjY2NyA3Ljk2NDQ0NC0yMy44OTMzMzMgMTIuNTE1NTU1LTQuNTUxMTExIDMuNDEzMzMzLTI1LjAzMTExMSAxOC4yMDQ0NDQtNjAuMzAyMjIyIDQ0LjM3MzMzNC02LjgyNjY2NyA1LjY4ODg4OS05LjEwMjIyMiAxNC43OTExMTEtNC41NTExMTIgMjIuNzU1NTU1czEzLjY1MzMzMyAxMC4yNCAyMC40OCA1LjY4ODg4OWwzNC4xMzMzMzQtMjAuNDgtMzUuMjcxMTExIDE1MC4xODY2NjdjLTMuNDEzMzMzIDEzLjY1MzMzMyAxLjEzNzc3OCAyMi43NTU1NTYgNy45NjQ0NDQgMzAuNzIgNS42ODg4ODkgNi44MjY2NjcgMTQuNzkxMTExIDExLjM3Nzc3OCAyMy44OTMzMzMgMTEuMzc3Nzc3IDQuNTUxMTExIDAgNy45NjQ0NDQtMS4xMzc3NzggMTEuMzc3Nzc4LTIuMjc1NTU1IDYuODI2NjY3LTMuNDEzMzMzIDMxLjg1Nzc3OC0xNy4wNjY2NjcgNzYuMjMxMTExLTQzLjIzNTU1NiA3Ljk2NDQ0NC00LjU1MTExMSAxMS4zNzc3NzgtMTQuNzkxMTExIDUuNjg4ODg5LTIyLjc1NTU1NS0zLjQxMzMzMy01LjY4ODg4OS0xMy42NTMzMzMtOS4xMDIyMjItMjIuNzU1NTU1LTQuNTUxMTExeiIgcC1pZD0iNDUxOSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MjMuMzc3Nzc4IDM2NC4wODg4ODltLTQ1LjUxMTExMSAwYTQ1LjUxMTExMSA0NS41MTExMTEgMCAxIDAgOTEuMDIyMjIyIDAgNDUuNTExMTExIDQ1LjUxMTExMSAwIDEgMC05MS4wMjIyMjIgMFoiIHAtaWQ9IjQ1MjAiIGZpbGw9IiMxODkwZmYiPjwvcGF0aD48L3N2Zz4="
const solidInfoIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3NzM1NjA5ODg2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxNzAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDk2Yy0yMjkuNzYgMC00MTYgMTg2LjI0LTQxNiA0MTZzMTg2LjI0IDQxNiA0MTYgNDE2IDQxNi0xODYuMjQgNDE2LTQxNi0xODYuMjQtNDE2LTQxNi00MTZ6TTU3Ny4yNDggNjY1LjA1NmMtMzEuMzkyIDQ3LjEzNi02My4zMjggODMuNDU2LTExNy4wNTYgODMuNDU2LTM2LjY3Mi01Ljk4NC01MS43NDQtMzIuMjU2LTQzLjgwOC01OS4wNGw2OS4xMi0yMjguOTI4YzEuNjk2LTUuNi0xLjEyLTExLjU4NC02LjI0LTEzLjQwOC01LjA4OC0xLjc5Mi0xNS4wNzIgNC44MzItMjMuNzEyIDE0LjMwNGwtNDEuNzkyIDUwLjI3MmMtMS4xMi04LjQ0OC0wLjEyOC0yMi40LTAuMTI4LTI4LjAzMiAzMS4zOTItNDcuMTM2IDgyLjk3Ni04NC4zMiAxMTcuOTUyLTg0LjMyIDMzLjI0OCAzLjM5MiA0OC45OTIgMjkuOTg0IDQzLjIgNTkuMmwtNjkuNiAyMzAuMDQ4Yy0wLjkyOCA1LjE4NCAxLjgyNCAxMC40NjQgNi41MjggMTIuMTI4IDUuMTIgMS43OTIgMTUuODcyLTQuODMyIDI0LjU0NC0xNC4zMDRsNDEuNzYtNTAuMjRjMS4xMiA4LjQ0OC0wLjc2OCAyMy4yMzItMC43NjggMjguODY0ek01NjcuOTM2IDM2Ni4wNDhjLTI2LjQzMiAwLTQ3Ljg3Mi0xOS4yNjQtNDcuODcyLTQ3LjYxNnMyMS40NC00Ny41ODQgNDcuODcyLTQ3LjU4NCA0Ny44NzIgMTkuMjY0IDQ3Ljg3MiA0Ny41ODRjMCAyOC4zODQtMjEuNDQgNDcuNjE2LTQ3Ljg3MiA0Ny42MTZ6IiBwLWlkPSI0MTcxIiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+"
const successIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3OTM0NzE0NDY2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3NTMiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3ogbTAgODEwLjY2NjY2NmMtMjA0LjggMC0zNzMuMzMzMzMzLTE2OC41MzMzMzMtMzczLjMzMzMzMy0zNzMuMzMzMzMzUzMwNy4yIDEzOC42NjY2NjcgNTEyIDEzOC42NjY2NjcgODg1LjMzMzMzMyAzMDcuMiA4ODUuMzMzMzMzIDUxMiA3MTYuOCA4ODUuMzMzMzMzIDUxMiA4ODUuMzMzMzMzeiIgZmlsbD0iIzUyYzQxYSIgcC1pZD0iMzc1NCI+PC9wYXRoPjxwYXRoIGQ9Ik03MDEuODY2NjY3IDM4MS44NjY2NjdMNDQ4IDYzNy44NjY2NjcgMzIyLjEzMzMzMyA1MTJjLTEyLjgtMTIuOC0zMi0xMi44LTQ0LjggMC0xMi44IDEyLjgtMTIuOCAzMiAwIDQ0LjhsMTQ5LjMzMzMzNCAxNDkuMzMzMzMzYzYuNCA2LjQgMTQuOTMzMzMzIDguNTMzMzMzIDIzLjQ2NjY2NiA4LjUzMzMzNHMxNy4wNjY2NjctMi4xMzMzMzMgMjMuNDY2NjY3LTguNTMzMzM0bDI3Ny4zMzMzMzMtMjc3LjMzMzMzM2MxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjgtMTQuOTMzMzMzLTEyLjgtMzYuMjY2NjY3LTEyLjgtNDkuMDY2NjY2LTIuMTMzMzMzeiIgZmlsbD0iIzUyYzQxYSIgcC1pZD0iMzc1NSI+PC9wYXRoPjwvc3ZnPg=="
const solidSuccessIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3NzQ5NDM1OTEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwOTM0IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NHExOTAuMDE2IDQuOTkyIDMxNi41MTIgMTMxLjQ4OFQ5NjAgNTEycS00Ljk5MiAxOTAuMDE2LTEzMS40ODggMzE2LjUxMlQ1MTIgOTYwcS0xOTAuMDE2LTQuOTkyLTMxNi41MTItMTMxLjQ4OFQ2NCA1MTJxNC45OTItMTkwLjAxNiAxMzEuNDg4LTMxNi41MTJUNTEyIDY0eiBtLTU2IDUzNmwtOTkuMDA4LTk5LjAwOHEtMTItMTEuMDA4LTI3LjQ4OC0xMS4wMDh0LTI3LjAwOCAxMS40ODgtMTEuNDg4IDI2LjQ5NiAxMS4wMDggMjcuMDA4bDEyNy4wMDggMTI3LjAwOHExMS4wMDggMTEuMDA4IDI3LjAwOCAxMS4wMDh0MjcuMDA4LTExLjAwOGwyNjMuMDA4LTI2My4wMDhxMTUuMDA4LTE1LjAwOCA5LjUwNC0zNi41MTJ0LTI3LjAwOC0yNy4wMDgtMzYuNTEyIDkuNTA0eiIgcC1pZD0iMTA5MzUiIGZpbGw9IiM1MmM0MWEiPjwvcGF0aD48L3N2Zz4="
const warningIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3NzM2MTQyODg0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc3MjYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDUxLjJhNDYwLjggNDYwLjggMCAxIDEgMCA5MjEuNiA0NjAuOCA0NjAuOCAwIDAgMSAwLTkyMS42eiBtMCA1NC4yMjA4YTQwNi41NzkyIDQwNi41NzkyIDAgMSAwIDAgODEzLjE1ODRBNDA2LjU3OTIgNDA2LjU3OTIgMCAwIDAgNTEyIDEwNS40NzJ6IiBmaWxsPSIjZmFhZDE0IiBwLWlkPSI3NzI3Ij48L3BhdGg+PHBhdGggZD0iTTUxNi44NjQgNjIwLjhjLTI3LjY5OTIgMC00MS41NzQ0LTEyLjQ5MjgtNDEuNTc0NC0zNy40Nzg0VjI4NC44NzY4YzAtMjQuOTg1NiAxMy44MjQtMzcuNDc4NCA0MS41NzQ0LTM3LjQ3ODQgMTMuMTU4NCAwIDIzLjM5ODQgMi44MTYgMzAuNjY4OCA4LjQ5OTIgNy4yNzA0IDUuNjgzMiAxMC45MDU2IDE1LjgyMDggMTAuOTA1NiAzMC4zNjE2djI5NS43MzEyYzAgMTQuNTQwOC0zLjYzNTIgMjQuNjI3Mi0xMC45MDU2IDMwLjMxMDQtNy4yNzA0IDUuNjMyLTE3LjUxMDQgOC40OTkyLTMwLjY2ODggOC40OTkyeiBtMCA1NC41MjhjMTMuMTU4NCAwIDI0LjE2NjQgNC40MDMyIDMzLjAyNCAxMy4zMTIgOC44NTc2IDguODU3NiAxMy4zMTIgMTkuODY1NiAxMy4zMTIgMzMuMDI0YTQ0Ljg1MTIgNDQuODUxMiAwIDAgMS0xMy4zMTIgMzMuMDI0IDQ0Ljg1MTIgNDQuODUxMiAwIDAgMS0zMy4wMjQgMTMuMzEyIDQ0Ljg1MTIgNDQuODUxMiAwIDAgMS0zMy4wMjQtMTMuMzEyIDQ0Ljg1MTIgNDQuODUxMiAwIDAgMS0xMy4zMTItMzMuMDI0YzAtMTMuMTU4NCA0LjQwMzItMjQuMTY2NCAxMy4zMTItMzMuMDI0YTQ0Ljg1MTIgNDQuODUxMiAwIDAgMSAzMy4wMjQtMTMuMzEyeiIgZmlsbD0iI2ZhYWQxNCIgcC1pZD0iNzcyOCI+PC9wYXRoPjwvc3ZnPg=="
const solidWarningIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3NzM2MTc5MzE3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc5MzAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDY0LjMwMzUzOGMtMjQ3LjI1NTMzNyAwLTQ0Ny42OTY0NjIgMjAwLjQ0MTEyNS00NDcuNjk2NDYyIDQ0Ny42OTY0NjJzMjAwLjQ0MTEyNSA0NDcuNjk2NDYyIDQ0Ny42OTY0NjIgNDQ3LjY5NjQ2MiA0NDcuNjk2NDYyLTIwMC40NDExMjUgNDQ3LjY5NjQ2Mi00NDcuNjk2NDYyUzc1OS4yNTUzMzcgNjQuMzAzNTM4IDUxMiA2NC4zMDM1Mzh6TTUxMiA4MDQuOTQ4MDA1Yy0zNS4zMjE0NiAwLTYzLjk1NjYzNy0yOC42MzUxNzctNjMuOTU2NjM3LTYzLjk1NjYzNyAwLTM1LjMyMzUwNyAyOC42MzUxNzctNjMuOTU2NjM3IDYzLjk1NjYzNy02My45NTY2MzdzNjMuOTU2NjM3IDI4LjYzMzEzMSA2My45NTY2MzcgNjMuOTU2NjM3QzU3NS45NTY2MzcgNzc2LjMxMjgyOCA1NDcuMzIxNDYgODA0Ljk0ODAwNSA1MTIgODA0Ljk0ODAwNXpNNTc1Ljk1NjYzNyA1MTJjMCAzNS4zMjE0Ni0yOC42MzUxNzcgNjMuOTU2NjM3LTYzLjk1NjYzNyA2My45NTY2MzdzLTYzLjk1NjYzNy0yOC42MzUxNzctNjMuOTU2NjM3LTYzLjk1NjYzN2wwLTIyMy44NDgyMzFjMC0zNS4zMjM1MDcgMjguNjM1MTc3LTYzLjk1NjYzNyA2My45NTY2MzctNjMuOTU2NjM3czYzLjk1NjYzNyAyOC42MzMxMzEgNjMuOTU2NjM3IDYzLjk1NjYzN0w1NzUuOTU2NjM3IDUxMnoiIGZpbGw9IiNmYWFkMTQiIHAtaWQ9Ijc5MzEiPjwvcGF0aD48L3N2Zz4="
const errorIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3OTM0OTA2NTM0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU3MjYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3ogbTAgODEwLjY2NjY2NmMtMjA0LjggMC0zNzMuMzMzMzMzLTE2OC41MzMzMzMtMzczLjMzMzMzMy0zNzMuMzMzMzMzUzMwNy4yIDEzOC42NjY2NjcgNTEyIDEzOC42NjY2NjcgODg1LjMzMzMzMyAzMDcuMiA4ODUuMzMzMzMzIDUxMiA3MTYuOCA4ODUuMzMzMzMzIDUxMiA4ODUuMzMzMzMzeiIgZmlsbD0iI2ZmNGQ0ZiIgcC1pZD0iNTcyNyI+PC9wYXRoPjxwYXRoIGQ9Ik02NTcuMDY2NjY3IDM2MC41MzMzMzNjLTEyLjgtMTIuOC0zMi0xMi44LTQ0LjggMGwtMTAyLjQgMTAyLjQtMTAyLjQtMTAyLjRjLTEyLjgtMTIuOC0zMi0xMi44LTQ0LjggMC0xMi44IDEyLjgtMTIuOCAzMiAwIDQ0LjhsMTAyLjQgMTAyLjQtMTAyLjQgMTAyLjRjLTEyLjggMTIuOC0xMi44IDMyIDAgNDQuOCA2LjQgNi40IDE0LjkzMzMzMyA4LjUzMzMzMyAyMy40NjY2NjYgOC41MzMzMzRzMTcuMDY2NjY3LTIuMTMzMzMzIDIzLjQ2NjY2Ny04LjUzMzMzNGwxMDIuNC0xMDIuNCAxMDIuNCAxMDIuNGM2LjQgNi40IDE0LjkzMzMzMyA4LjUzMzMzMyAyMy40NjY2NjcgOC41MzMzMzRzMTcuMDY2NjY3LTIuMTMzMzMzIDIzLjQ2NjY2Ni04LjUzMzMzNGMxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjhsLTEwNi42NjY2NjYtMTAwLjI2NjY2NiAxMDIuNC0xMDIuNGMxMi44LTEyLjggMTIuOC0zNC4xMzMzMzMgMC00Ni45MzMzMzR6IiBmaWxsPSIjZmY0ZDRmIiBwLWlkPSI1NzI4Ij48L3BhdGg+PC9zdmc+"
const solidErrorIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3NzQ5MzA0NTk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk2MTMiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDY0YzEyNi42NzczMzMgMy4zMjggMjMyLjE5MiA0Ny4xNDY2NjcgMzE2LjUwMTMzMyAxMzEuNDk4NjY3QzkxMi44NTMzMzMgMjc5LjgwOCA5NTYuNjcyIDM4NS4yOCA5NjAgNTEyYy0zLjMyOCAxMjYuNjc3MzMzLTQ3LjE0NjY2NyAyMzIuMTkyLTEzMS40OTg2NjcgMzE2LjUwMTMzM0M3NDQuMTkyIDkxMi44NTMzMzMgNjM4LjcyIDk1Ni42NzIgNTEyIDk2MGMtMTI2LjY3NzMzMy0zLjMyOC0yMzIuMTkyLTQ3LjE0NjY2Ny0zMTYuNTAxMzMzLTEzMS40OTg2NjdDMTExLjE0NjY2NyA3NDQuMTkyIDY3LjMyOCA2MzguNzIgNjQgNTEyYzMuMzI4LTEyNi42NzczMzMgNDcuMTQ2NjY3LTIzMi4xOTIgMTMxLjQ5ODY2Ny0zMTYuNTAxMzMzQzI3OS44MDggMTExLjE0NjY2NyAzODUuMjggNjcuMzI4IDUxMiA2NHogbTAgMzk0LjAyNjY2N0w0MDcuOTc4NjY3IDM1NC4wMDUzMzNhMzcuODAyNjY3IDM3LjgwMjY2NyAwIDAgMC0yNy40NzczMzQtMTEuOTg5MzMzIDM3LjAzNDY2NyAzNy4wMzQ2NjcgMCAwIDAtMjcuMDA4IDExLjUyYy03LjY4IDcuNjM3MzMzLTExLjUyIDE2LjY0LTExLjQ3NzMzMyAyNi45NjUzMzMgMCAxMC4zNjggNC4wMTA2NjcgMTkuNTQxMzMzIDExLjk4OTMzMyAyNy41Mkw0NTguMDI2NjY3IDUxMmwtMTA0LjAyMTMzNCAxMDQuMDIxMzMzYTM3LjgwMjY2NyAzNy44MDI2NjcgMCAwIDAtMTEuOTg5MzMzIDI3LjQ3NzMzNGMwIDEwLjMyNTMzMyAzLjg0IDE5LjMyOCAxMS41MiAyNy4wMDggNy42MzczMzMgNy42OCAxNi42NCAxMS41MiAyNi45NjUzMzMgMTEuNDc3MzMzYTM3LjkzMDY2NyAzNy45MzA2NjcgMCAwIDAgMjcuNTItMTEuOTg5MzMzTDUxMiA1NjUuOTczMzMzbDEwNC4wMjEzMzMgMTA0LjAyMTMzNGMxMC42NjY2NjcgOS45ODQgMjIuOTU0NjY3IDEzLjE4NCAzNi45OTIgOS41MTQ2NjZhMzQuNzczMzMzIDM0Ljc3MzMzMyAwIDAgMCAyNi40NTMzMzQtMjYuNDk2IDM3LjIwNTMzMyAzNy4yMDUzMzMgMCAwIDAtOS40NzItMzYuOTkyTDU2NS45NzMzMzMgNTEybDEwNC4wMjEzMzQtMTA0LjAyMTMzM2EzNy44MDI2NjcgMzcuODAyNjY3IDAgMCAwIDExLjk4OTMzMy0yNy40NzczMzQgMzcuMDM0NjY3IDM3LjAzNDY2NyAwIDAgMC0xMS41Mi0yNy4wMDggMzYuNzc4NjY3IDM2Ljc3ODY2NyAwIDAgMC0yNi45NjUzMzMtMTEuNDc3MzMzIDM3LjkzMDY2NyAzNy45MzA2NjcgMCAwIDAtMjcuNTIgMTEuOTg5MzMzTDUxMiA0NTguMDI2NjY3eiIgZmlsbD0iI2ZmNGQ0ZiIgZmlsbC1vcGFjaXR5PSIuOTYiIHAtaWQ9Ijk2MTQiPjwvcGF0aD48L3N2Zz4="
const closeIcon = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc3OTMyMTQyNDY5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyODciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTA3LjE2OCA0NzMuMjMyTDcxNi40OCAyNjMuOTM2YTE2IDE2IDAgMCAxIDIyLjYyNCAwbDExLjMxMiAxMS4zMTJhMTYgMTYgMCAwIDEgMCAyMi42MjRMNTQxLjEyIDUwNy4xNjggNzUwLjQgNzE2LjQ4YTE2IDE2IDAgMCAxIDAgMjIuNjI0bC0xMS4zMTIgMTEuMzEyYTE2IDE2IDAgMCAxLTIyLjYyNCAwTDUwNy4xNjggNTQxLjEyIDI5Ny44NzIgNzUwLjRhMTYgMTYgMCAwIDEtMjIuNjI0IDBsLTExLjMxMi0xMS4zMTJhMTYgMTYgMCAwIDEgMC0yMi42MjRsMjA5LjI5Ni0yMDkuMzEyLTIwOS4yOTYtMjA5LjI5NmExNiAxNiAwIDAgMSAwLTIyLjYyNGwxMS4zMTItMTEuMzEyYTE2IDE2IDAgMCAxIDIyLjYyNCAwbDIwOS4yOTYgMjA5LjI5NnoiIGZpbGw9IiM4YThhOGEiIHAtaWQ9IjIyODgiPjwvcGF0aD48L3N2Zz4="
export {
    infoIcon,
    solidInfoIcon,
    successIcon,
    solidSuccessIcon,
    warningIcon,
    solidWarningIcon,
    errorIcon,
    solidErrorIcon,
    closeIcon
}