package com.team.web.file;

public enum Key {
    ACCESS_KEY, SECRET_KEY;

    @Override
    public String toString(){
        String resultKey = "";
        switch(this) {
            case ACCESS_KEY: resultKey = "Access key"; break;
            case SECRET_KEY: resultKey = "Secret key"; break;
            default: resultKey = "";
        }
        return resultKey;
    }
}
