/*
 * Copyright (c) 2016 BreizhCamp
 * [http://breizhcamp.org]
 *
 * This file is part of CFP.io.
 *
 * CFP.io is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

angular.module('CallForPaper').factory('AdminComment', function($resource, AppConfig) {
    return $resource(AppConfig.apiBaseUrl + '/proposals/:rowId/comments', {},
        {
            getAll: {
                method: 'GET',
                isArray: true
            },
            getByRowId: {
                url: AppConfig.apiBaseUrl + '/proposals/:rowId/comments',
                method: 'GET',
                isArray: true
            },
            update: {method: 'PUT', url: AppConfig.apiBaseUrl + '/proposals/:rowId/comments/:id'},
            delete: {method: 'DELETE', url: AppConfig.apiBaseUrl + '/proposals/:rowId/comments/:id'}

        });
});
