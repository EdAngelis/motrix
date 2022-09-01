```javascript
const database = [
  {
    contentTable: [
      {
        id: "",
        updatedAt: "",
        revisions: [
          {
            title: "",
            content: "",
            createdAt: "",
          },
        ],
      },
    ],
  },
];

const api = [
  {
    createRevision: {
      method: "POST",
      params: {
        idContent: "",
      },
      body: {
        title: "",
        content: "",
      },
    },
  },
  {
    getContents: {
      method: "GET",
    },
  },
  {
    getRevisions: {
      method: "GET",
      params: {
        idContent: "",
      },
    },
  },
  {
    removeContent: {
      method: "DELETE",
      body: ["id-content"],
    },
  },
  {
    activeUnactiveContent: {
      method: "PUT",
      body: ["id-content"],
    },
  },
];
```
