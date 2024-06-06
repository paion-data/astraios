/*
 * Copyright 2024 Paion Data
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.paiondata.astraios;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

/**
 * Example app using elide-spring.
 */
@SpringBootApplication
@EntityScan
public class App {
    /**
     * Primary entry point of the application.
     * @param args Command line arguments passed to the application.
     * @throws Exception if an error occurs during the application startup or execution.
     */
    public static void main(final String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }
}
