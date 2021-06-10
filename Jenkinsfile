pipeline {
  agent any
    
  tools {nodejs "nodeJS"}
    
  stages {
    
    stage('Clean') {
      steps {
         sh 'rm -rf *'
      }
    } 
    
    stage('Cloning Git Repo') {
      steps {
        git 'https://github.com/AharonIsraelCohen/netoTest.git'
      }
    }
        
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
         sh 'npm run build'
      }
    }      
  }
}
