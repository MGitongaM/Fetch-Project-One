const btnUsers = document.querySelector(".btn-get-jsonplaceholders-users");
const btnPosts = document.querySelector(".btn-get-jsonplaceholders-posts");
const outputSection = document.querySelector(".output-section");

btnUsers.addEventListener("click", () => {
  outputSection.innerHTML = `<p class="text-center text-white">processing...</p>`;
  setTimeout(() => {
    getUsers();
  }, 1000);
});
btnUsers.addEventListener("dblclick", () => {
  outputSection.innerHTML = `<p class="text-center text-white"> Clearing data...</p>`;
  setTimeout(() => {
    clear();
  }, 2000);
});

btnPosts.addEventListener("click", () => {
  outputSection.innerHTML = `<p class="text-center text-white">Loading...</p>`;
  loadPosts();
});

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      let output = "";
      data.forEach((user) => {
        output += `<ul class="list-group  my-5">
        <li class="list-group-item d-flex justify-content-between">
        Name:${user.name}
        <span class="badge badge-primary badge-pill">Id:${user.id}</span>
        </li>
        <li class="list-group-item">Email:${user.email}</li>
        <li class="list-group-item">Phone:${user.phone}</li>
        <li class="list-group-item">User-Name:${user.username}</li>
        <li class="list-group-item">Website:${user.website}</li>
        <li class="list-group-item">City:${user.address.city}</li>
        </ul>`;
      });
      outputSection.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
      outputSection.textContent = `<p class="text-center text-white">Error...try refreshing</p>`;
    });
}
function loadPosts() {
  fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res) => res.json())
    .then((data) => {
      let newData = data
        .filter((dataItem) => {
          return dataItem;
        })
        .slice(0, 10);
      console.log(newData);
      let output1 = "";
      newData.forEach((post) => {
        output1 += `<div class="card my-5">
          <div class="card-header text-capitalize">
          ${post.title}
          </div>
          <div class="card-body">
            <p class="card-text">${post.body} <a href="#"class="badge badge-secondary">read more...</a></p>
          </div>
          <div class="card-footer text-end">
            <P class="justify-content-start"><span class="badge badge-success  ">Written by id:${post.id}</span></P>
          </div>
        </div>`;
      });
      outputSection.innerHTML = output1;
    })
    .catch((err) => {
      console.log(err);
      outputSection.innerHTML = `<p class="text-center text-white">Error...try refreshing</p>`;
    });
}
function clear() {
  outputSection.innerHTML = "";
}
