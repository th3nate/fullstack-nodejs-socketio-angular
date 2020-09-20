# Fullstack NodeJS/Socket.io/Angular

## Server installation

1. Navigate to `src/server` and install project dependencies by running `npm i`
2. Run `npm start` and your endpoint will be available at `http://localhost:3001/`

## Client installation

1. Navigate to `src/client` and install project dependencies by running `npm i`
2. Run `ng serve`

## Usage

1. Navigate to `http://localhost:4200/` and you'll see the client's dashboard.
2. To add more workspaces open postman, in the request url type: `http://localhost:3001/update-workspaces`
3. Set method to PUT
4. Go to the `Body` Tab and choose the `raw` radio button
5. Set `json` as the type of payload
6. Insert a payload of your choosing (Array of objects or a single object) and submit, 
Please note that currently there's no schema validation. 
- List of workspaces to update multiple
```
[
    {
        "id": "asd123asd",
        "eventId": "1",
        "owner": "jane@doe.com",
        "status": "offline/preparing/ready/terminated/deleted",
        "createdAt": "2018-04-09T18:13:00.294Z"
    },
    {
        "id": "asd456asd",
        "eventId": "1",
        "owner": "john@doe.com",
        "status": "offline/preparing/ready/terminated/updated",
        "createdAt": "2018-06-09T18:13:00.294Z"
    },
    {
        "id": "asd789asd",
        "eventId": "2",
        "owner": "james@doe.com",
        "status": "offline/preparing/ready/terminated/created",
        "createdAt": "2018-08-09T18:13:00.294Z"
    }
]
```
- OR a single workspace
```
{
    "id": "asd000asd",
    "eventId": "3",
    "owner": "michael@doe.com",
    "status": "offline/preparing/ready/terminated/created",
    "createdAt": "2018-10-09T18:13:00.294Z"
}
```

The list of workspaces in your browser should update accordingly

## Further help

Refer to the local README.md files for more informaion about the client or server projects.
