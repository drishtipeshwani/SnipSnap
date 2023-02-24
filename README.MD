## Project Name

### Cover Image
![Cover - 2](https://user-images.githubusercontent.com/65016769/221125959-d777d342-82e6-4c11-b907-037ee2ef2247.jpg)

## About

### Description
- I love exploring different tech frameworks, libraries , learning new programming concepts and working on coding projects. There are times, where I feel that I should save code blocks for future reference related to new framework or bug fixes. Saving this code blocks could be really helpful and save time in future. Hence, I decided to create this platform that could help users to save their coding snippets for future reference.
- Moreover, I have integrated the website with a dashboard where users can convert their stored snippets directly into customized images and download and share it as part of their blogs or on their social media handles.
- SnipSnap is a basically a one-stop platform for users to save all their important coding snippets at one place so that they can refer to them later. It is integrated with overall CRUD functionality to modify the snippets stored.
- Further, the user is provided with an option of creating a snap. By clicking on this, the user is navigated to their dashboard where they can convert their code snippet to customized image in seconds.
- I used the supabase dataprovider by refine to connect by React app with the database, which really simplified the backend connection process.
- I created the refine app integrated with the Chakra UI frmaework which saved me time as I didn't had to install it seperately or do the basic setup.
- Similarly for routing, the basic template was provided by Refine and I could just modify it depending on my needs
- The Refine Tutorials and Examples were also really helpful for me while I was implementing the CRUD pages.

### Tech Stack
- Used Refine - which is a React based framework for the Frontend Development of the application.
- Used Supabase as my database
- Used Chakra UI as the UI library
- Used additional react packages for syntax highlighting, converting html to image canvas etc.

### What's next for SnipSnap
- Integrate complete authentication
- Add the functionality for users to share the snippets to social media apps without downloading
- More customization options like adding text, icons to images etc.
- Further, the website can also be converted into a social application where users can share snippets among each other and have discussion thread related to that

### Preview
![2023-02-24 (3)](https://user-images.githubusercontent.com/65016769/221127246-ff9ad005-2c7a-4d1b-ad11-3333db26fb05.png)
![2023-02-24 (1)](https://user-images.githubusercontent.com/65016769/221127278-f427b523-56cd-49e3-8864-14f83ff44db1.png)
![2023-02-24 (2)](https://user-images.githubusercontent.com/65016769/221127296-4c7c5f32-1fd0-4cc4-ab80-fb385095aaf3.png)
![download (4)](https://user-images.githubusercontent.com/65016769/221127708-549474f6-2ef1-4288-abbf-5df4b1e4ad83.png)

### Demo Video
Youtube Video Link - https://www.youtube.com/watch?v=_xyMwTspm_0

### Run Project Locally

- Clone the repository:
```
git clone https://github.com/drishtipeshwani/SnipSnap
```

- Change directory and install dependencies:

```
cd codesnippets
npm install
```
- Create a new Supabase project and inside that add a new table named snippets with following columns:

![2023-02-24 (4)](https://user-images.githubusercontent.com/65016769/221127597-4d0b55dc-e15c-4dc2-aca8-7a20e303873d.png)


- Add your Supabse URL and KEY under src/utility/supabaseClient.ts as shown below:

![2023-02-24 (5)](https://user-images.githubusercontent.com/65016769/221127614-397db2e1-f8f4-4d10-a09f-9c14bcd97a42.png)


- Run website on local server:

```
npm run dev
```
