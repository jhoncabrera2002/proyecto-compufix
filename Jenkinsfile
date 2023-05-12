pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'comando-de-compilación'
            }
        }
        stage('Test') {
            steps {
                sh 'comando-de-prueba'
            }
        }
        stage('Deploy') {
            steps {
                sh 'comando-de-despliegue'
            }
        }
    }
}
