import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='border border-info p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span> What is the difference between authorization and authentication?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <div className='row '>

                    <div className='col-md-6 '>
                        <h5><u>Authentication</u></h5>
                        <ol type="I">
                            <li>Authentication verifies who the user is.</li>
                            <li>Authentication works through passwords,email, biometric information, and other information provided by the user.</li>
                            <li>Authentication is visible to the user.</li>
                            <li>It is done before the authorization process.</li>
                        </ol>
                    </div>
                    <div className='col-md-6 '>
                        <h5><u>Authorization</u></h5>
                        <ol type="I">
                            <li>Authorization determines what services a user can access.</li>
                            <li>Authentication system required for authorization that need for security</li>
                            <li>Authorization isn't visible to or changeable by the user.</li>
                            <li>While this process is done after the authentication process.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className='border border-info p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p>
                    <span className='fs-5 '><u>Why use firebase-</u></span>
                    Firebase is used for many purposes that can help your apps to develop, grow and make it a quality website.Firebase is a less technical and time-saving alternative to writing absolute backend code for dynamic apps.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.All of these can save you a significant amount of development cost.
                </p>
                <p className='fs-5'><span className='fs-5 '><u>Other options to implement authentication-</u></span> Back4App, Parse, AWS Anplify, Backendless, Kuzzle, supabase, Nhost, Deployed, appwrite, Hasura etc.</p>
            </div>

            <div className='border border-info p-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span>What other services does firebase provide other than authentication?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p><span className='fs-3'><u>Firebase Services-</u></span></p>
                <ol type='I' className='fs-5'>
                    <li>Cloud Firestone</li>
                    <li>Cloud Function</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ol>

            </div>

        </div>
    );
};

export default Blog;