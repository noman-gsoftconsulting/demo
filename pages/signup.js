import React from "react";
import Link from 'next/link'


function signup() {
  return (
    <div className="flex">
      <div className="">
        <div className="text-center">
          <h2 className="text-center">
            Sign up
          </h2>
          <p className="text-center">
            already have an account?{" "}
            <Link href="/login">
              <a>
                Log in
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signup;
