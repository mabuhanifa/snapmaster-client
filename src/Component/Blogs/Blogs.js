import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div>
        <h2> Difference between authorization and authentication :</h2>
        <p>
          Authentication is the process of verifying something or someone
          whether they are real or not. It could be a person, data, application,
          document, or anything. Authorization deals with the right of
          accessibility where it defines the right of someone or something. It
          tells whether a person or something can access, use or modify
          something else. In a computerized system, authentication confirms
          users are who they say they are, and authorization gives the user
          permission to access a resource.
        </p>
      </div>
      <div>
        <h2>Reason of using Firebase:</h2>
        <p>
          Firebase is a google provided cloud-based platform that provides a
          simple, secure, and reliable way to authorize,authenticae store, sync, and share data. It is a free service that allows everyone to build and host your own web applications and mobile apps. It is a free, open-source, and fully customizable platform that is available to anyone.
        </p>
        <h2>Alternatives of Firebase:</h2>
        <p>
          There are many alternatives of firebase. 5 of the top firebase
          alternatives are give below
        </p>
        <ol>
          <li>AWS Amplify</li>
          <li>Kuzzle</li>
          <li>Couchbase</li>
          <li>NativeScript</li>
          <li>RxDB</li>
        </ol>
      </div>
      <div>
          <h2>List of firebase services other than Authentication : </h2>
          <p>  
            <ol>
                <li>Realtime Database</li>
                <li>Remote Config</li>
                <li>Firebase Machine Learning</li>
                <li>Cloud Storage</li>
                <li>Firebase Hosting</li>
                <li>Firebase Messaging</li>
                <li>Firebase Functions</li>
                <li>Firebase Performance</li>
                <li>Analytics and more</li>
            
            </ol>  

          </p>
      </div>
    </div>
  );
};

export default Blogs;
