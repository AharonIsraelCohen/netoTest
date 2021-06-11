pipeline {
  
  environment {
    registry = "ac770/netomedia"
    registryCredential = "${dockerhub}"
  }
  
  agent any
    
  tools {nodejs "nodeJS"}
    
  stages {
    
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
    
    stage('Building image') {
    steps{
      script {
        docker.build registry + ":$BUILD_NUMBER"
      }
    }
  }
  }
}

