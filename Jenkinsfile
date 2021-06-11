pipeline {
  
  environment {
    user = "ac770"
    registry = "netomedia"
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
        sh 'sudo docker build -t $user/$registry:$BUILD_NUMBER .'
      }
    }
    
    
    stage('Login to DockerHub') {
      steps{
        withCredentials([string(credentialsId: 'token', variable: 'token')]){
        sh 'sudo docker login -u $user -p $token'
        }
      }
    }
    
    stage('Push image') {
      steps{
        sh 'sudo docker push $user/$registry:$BUILD_NUMBER'
      }
    }
  
     stage('Remove Unused docker image') {
      steps{
        sh "sudo docker rmi $user:$registry:$BUILD_NUMBER"
      }
    }
    
  }
}

