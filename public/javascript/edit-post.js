async function editFormHandler(event) {
  event.preventDefault();

  console.log('----------- edit_post.js ----------')

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      date,
      title,
      weight,
      distance,
      time,
      weight,
      sets,
      reps
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
