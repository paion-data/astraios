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
package com.paiondata.astraios.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import ch.qos.logback.access.servlet.TeeFilter;

/**
 * Configuration for the filters.
 */
@Configuration
public class FilterConfiguration {

    private static final String PATH_PREFIX = "/*";

    /**
     * Register the request/response filter.
     * @return FilterRegistrationBean
     */
    @Bean
    public FilterRegistrationBean<TeeFilter> requestResponseFilter() {

        final FilterRegistrationBean<TeeFilter> filterRegBean = new FilterRegistrationBean<>();
        final TeeFilter filter = new TeeFilter();
        filterRegBean.setFilter(filter);
        filterRegBean.addUrlPatterns(PATH_PREFIX);
        filterRegBean.setName("Elide Request Response Filter");
        filterRegBean.setAsyncSupported(Boolean.TRUE);
        return filterRegBean;
    }
}
